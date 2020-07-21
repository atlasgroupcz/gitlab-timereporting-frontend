export const firstObjValue = <T extends {}>(obj: T) =>
    Object.values(obj)[0] as typeof obj[keyof typeof obj];
