import fg from "fast-glob";
import StormDB from "stormdb";
import { Skeleton } from "./Skeleton";

export class StorageImporter {
  public constructor(private app: Skeleton<any>) {}

  /**
   * Imports all job files and registers them.
   */
  async loadAndRegister() {
    await this.importFileInFolder(
      "**/*.storage.json",
      { cwd: __dirname.replace(/\\/g, "/"), ignore: ["built"] },
      "",
    );
  }

  /**
   * Imports the default export from the filepath whos name matches with the search string
   * The default export is expected to be a class extending T.
   */
  async importFileInFolder(
    searchString: string,
    fgConfig: any = {},
    importPrefix: string = "",
  ): Promise<any> {
    const entries = await fg(searchString, fgConfig);
    for (const file of entries) {
      let importPath = __dirname + "/" + importPrefix + file;
      const engine = new StormDB.localFileEngine(importPath);
      const db = new StormDB(engine);
      let name = await db.get("name").value();
      this.app.addStorage(db);
    }
  }
}
