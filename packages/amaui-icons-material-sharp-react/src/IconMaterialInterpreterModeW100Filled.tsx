import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInterpreterModeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InterpreterModeW100Filled'

      short_name='InterpreterMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.5 16.15q-.35 0-.6-.25t-.25-.6v-2.5q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6v2.5q0 .35-.25.6t-.6.25Zm-.35 3.7v-1.525q-1.225-.2-1.925-1.013-.7-.812-.775-2.012h.7q0 .975.688 1.662.687.688 1.662.688.975 0 1.663-.688.687-.687.687-1.662h.7q-.075 1.2-.762 2.012-.688.813-1.938 1.013v1.525Zm-11.6-8.7q-.95-.05-1.65-.8T6.2 8.5q0-1.1.7-1.85t1.65-.8h-.012.012q-.425.45-.638 1.1Q7.7 7.6 7.7 8.5t.2 1.525q.2.625.65 1.125ZM2.2 18.2v-1.3q0-.425.238-.85.237-.425.762-.8.3-.2.7-.375.4-.175.8-.275-.475.35-.737.925Q3.7 16.1 3.7 16.9v1.3Zm10.2-7q-1.125 0-1.912-.788Q9.7 9.625 9.7 8.5t.788-1.912Q11.275 5.8 12.4 5.8t1.912.788q.788.787.788 1.912t-.788 1.912q-.787.788-1.912.788Zm-6.7 7v-1.3q0-.55.337-1.037.338-.488.913-.763 1.175-.575 2.625-.938 1.45-.362 2.825-.362.75 0 1.6.125.85.125 1.575.325-.05.125-.075.325-.025.2-.05.35-.05.65.075 1.363.125.712.425 1.212.1.2.2.362.1.163.225.338Z"/>
    </Icon>
  );
});

IconMaterialInterpreterModeW100Filled.displayName = 'AmauiIconMaterialInterpreterModeW100Filled';

export default IconMaterialInterpreterModeW100Filled;
