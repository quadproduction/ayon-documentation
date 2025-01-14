---
id: admin_hosts_houdini
title: Houdini Admin docs
sidebar_label: Houdini
---

## Shelves Manager
You can add your custom [Shelves](https://www.sidefx.com/docs/houdini/shelf/index.html) into Houdini by setting your shelf sets, shelves and tools in **Houdini -> Shelves Manager**.
![Custom menu definition](assets/houdini-admin_shelvesmanager.png)

The Shelf Set Path is used to load a .shelf file to generate your shelf set. If the path is specified, you don't have to set the shelves and tools.


![Shelves Creation](assets/settings_project_houdini_shelves.png)
1. **Shelf set name:** enter the name of the **shelf set** you want to import or create.
2. **Shelf Set Path (optional):** enter the Shelf set path (on Windows, MacOs or Linux) (optional).
3. **(+/-) :** add or delete a **shelf set**.
4. **(+/-) :** add a **shelf** to the **shelf set**.
5. **(+/-) :** add a **tool** to this shelf.
6. **Shelf Name:** enter the **shelf**'s name you want to create.
7. **Name:** enter the **tool** name you want to add to this **shelf**.
8. **Script:** enter the tool's script to import it.
9. **Icon:** add the tool's icon.
10. **Help:** add a help text to the tool. It shows when you rest the cursor on the tool
11. **⇅:** change the **shelf** order into the **shelf set**.
12.  **⇅:** change the **tool** order in it **shelf**.

# Creator plugins
Enable or disable the plugins. Some of them have extra options such as defining the default subsets names.

**Plugins list:** Create Arnold Ass, Create Alembic Camera, Create Composite (Image Sequence), Create Point Cache, Create Redshift ROP, Create Remote Publish, Create VDB Cache, Create USD, Create USD Model, Create USD Shading Workspace, Create USD Render.

# Publish plugings
Enable or disable the plugins executed at publishing.

**Publish plugins list:** Validate Workfile Paths, ValidateContainers.