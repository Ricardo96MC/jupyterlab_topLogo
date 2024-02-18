/* eslint-disable prettier/prettier */
import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { MainAreaWidget } from '@jupyterlab/apputils';
import { ILauncher } from '@jupyterlab/launcher';
import { reactIcon } from '@jupyterlab/ui-components';
import { WeatherWidget } from './weatherapp';

/**
 * The command IDs used by the react-widget plugin.
 */
namespace CommandIDs {
  export const create = 'create-react-widget';
}

/**
 * Initialization data for the react-widget extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'react-widget',
  description: 'A minimal JupyterLab extension using a React Widget.',
  autoStart: true,
  optional: [ILauncher],
  activate: (app: JupyterFrontEnd, launcher: ILauncher) => {
    const { commands } = app;

    const command = CommandIDs.create;
    commands.addCommand(command, {
      caption: 'Create a new React Widget',
      label: 'React Weather Widget',
      icon: args => (args['isPalette'] ? undefined : reactIcon),
      execute: () => {
        // const content = new CounterWidget();
        // const widgetCounter = new MainAreaWidget<CounterWidget>({ content });
        // widgetCounter.title.label = 'React Counter Widget';
        // widgetCounter.title.icon = reactIcon;
        // app.shell.add(widgetCounter, 'main');

        const content= new WeatherWidget();
        const widgetWeather = new MainAreaWidget<WeatherWidget>({ content });
        widgetWeather.title.label = 'React Weather Widget';
        widgetWeather.title.icon = reactIcon;
        app.shell.add(widgetWeather, 'main');
      }
    });

    if (launcher) {
      launcher.add({
        command
      });
    }
  }
};
export default extension;
