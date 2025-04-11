import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const searchText = searchParams.get('q');
    const sessionToken = searchParams.get('session_token') || 'temp-session-'+Date.now();

    if (!searchText) {
      return NextResponse.json(
        { error: 'Missing search query (q parameter)' },
        { status: 400 }
      );
    }

 
    const url = new URL('https://api.mapbox.com/search/searchbox/v1/suggest');
    url.searchParams.append('q', searchText);
    url.searchParams.append('access_token', 'pk.eyJ1IjoiYWJ1YmFrYXJhc2lmZGFyMTAwIiwiYSI6ImNtOWI1bGI4ZDA4cmEybHF3OXZyaXVxMGYifQ.46-nCFy38os_LdphJ6FPlg');
    url.searchParams.append('session_token', sessionToken);
    url.searchParams.append('language', 'en');
    url.searchParams.append('types', 'address,place,neighborhood,locality');
    url.searchParams.append('limit', '10');

    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Mapbox API error: ${response.status} - ${errorData.message || 'Unknown error'}`);
    }

    const results = await response.json();
    return NextResponse.json(results);

  } catch (error) {
    return NextResponse.json(
      { error: error.message || 'Mapbox API request failed' },
      { status: error.message.includes('API error') ? 400 : 500 }
    );
  }
}