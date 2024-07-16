declare module "k6/x/filestorage" {
  /**
   * Represents a file stored in the file storage
   */
  export type File = {
    /** filename */
    name: string;

    /** absolute file path */
    path: string;

    /** file content */
    content: ArrayBuffer;
  }

  /**
   * File storage
   */
  export class FileStorage {
    /**
     * Constructor
     * @param basePath path to base directory for file storage
     * @returns file storage instance
     */
    public constructor(basePath: string);

    /**
     * Get list of all files in file storage
     * @returns list of filenames in the storage
     */
    public listFiles(): Array<string>;

    /**
     * Check that file with given filename is in the storage
     * @param filename filename to check
     * @returns true if file exists, false otherwise
     */
    public hasFile(filename: string): boolean;
    
    /**
     * Read file from storage
     * @param filename filename
     * @returns File object
     */
    public readFile(filename: string): File;

    /**
     * Read random file from storage
     * @returns File object
     */
    public readRandFile(): File;

    /**
     * Read file from storage with given extension
     * @param ext extension for filtering
     * @returns File object
     */
    public readRandFileWithExt(ext: string): File;
  }
}