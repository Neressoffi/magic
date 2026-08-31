/** Local copies of the original Picsum photos (same IDs as before). */
export function photo(id: number, _width?: number, _height?: number) {
  return `/media/${id}.jpg`;
}
