import { validateSelectedIds } from '../../../shared/validation';

export async function POST(request) {
  try {
    const body = await request.json();
    const { selectedIds } = body;

    const validation = validateSelectedIds(selectedIds);
    if (!validation.isValid) {
      return Response.json(
        { success: false, error: validation.error }, 
        { status: 400 }
      );
    }

    console.log('Received selected IDs:', selectedIds);
    console.log('Count:', selectedIds.length);

    return Response.json({ 
      success: true, 
      count: selectedIds.length,
      message: `Successfully processed ${selectedIds.length} selected IDs`
    });
  } catch (error) {
    console.error('API Error:', error);
    return Response.json(
      { success: false, error: 'Invalid request data' }, 
      { status: 400 }
    );
  }
} 