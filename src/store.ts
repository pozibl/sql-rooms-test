import {
  createProjectSlice,
  createProjectStore
} from '@sqlrooms/project'

import {
  BaseProjectConfig,
  LayoutTypes,
  MAIN_VIEW
} from '@sqlrooms/project-config'
import { z } from 'zod'

// Define a fallback ProjectState type if necessary
type ProjectState<T> = {
  config: T
  // Add other properties as needed
}

// Define panel types
export const ProjectPanelTypes = z.enum([
  'project-details',
  'data-sources',
  MAIN_VIEW
] as const)
export type ProjectPanelTypes = z.infer<typeof ProjectPanelTypes>

// Define your project config
// This holds all state necessary for persisting/saving the state of the app
export const AppConfig = BaseProjectConfig
// If using additional slices like SQL Editor:
// export const AppConfig = BaseProjectConfig.merge(SqlEditorSliceConfig);
export type AppConfig = z.infer<typeof AppConfig>

// Define your application state type
export type AppState = ProjectState<AppConfig>
// If using additional slices:
// export type AppState = ProjectState<AppConfig> & SqlEditorSliceState;
