export declare const type = "perItem";
export declare const active: boolean;
export declare const description = "removes width and height in presence of viewBox (opposite to removeViewBox, disable it first)";
export declare const params: any;
/**
 * Remove width/height attributes when a viewBox attribute is present.
 *
 * @example
 * <svg width="100" height="50" viewBox="0 0 100 50">
 *   ↓
 * <svg viewBox="0 0 100 50">
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if true, with and height will be filtered out
 *
 * @author Benny Schudel
 */
export declare function fn(item: any): void;