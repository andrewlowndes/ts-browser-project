export function MockType(obj: any): any {
  let mockedObj = function() { },
    proto = obj.prototype;

  for (let key in proto) {
    if (proto[key] && (proto[key]).prototype) {
      mockedObj.prototype[key] = jasmine.createSpy(key);
    }
  }

  return mockedObj;
}
