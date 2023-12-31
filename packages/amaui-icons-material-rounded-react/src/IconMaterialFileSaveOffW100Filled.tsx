import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileSaveOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileSaveOffW100Filled'

      short_name='FileSaveOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m799-236-19-20 34-34q4-4 10-4.5t10 4.5q4 4 3.5 10t-4.5 10l-34 34Zm-65-66-28-28v-69q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v97ZM523-513 202-834q8-9 19.5-14.5T246-854h249q12.444 0 23.722 5T538-836l178 178q8 8 13 19.278 5 11.278 5 23.722v72q0 12.75-8.625 21.375T704-513H523Zm77 487q-5.95 0-9.975-4.035-4.025-4.035-4.025-10T590.025-50q4.025-4 9.975-4h230L486-398v182q0 12.75-8.625 21.375T456-186H246q-24 0-42-18t-18-42v-452L74-811q-4-4-3.5-9t4.5-9.174Q78.667-833 84.333-833 90-833 94-829L865-58q1.667 1.74 2.833 4.522Q869-50.696 869-47.913v8Q869-34 864.975-30T855-26H600Zm-94-800v155q0 18.75 13.125 31.875T551-626h155L506-826l200 200-200-200Z"/>
    </Icon>
  );
});

IconMaterialFileSaveOffW100Filled.displayName = 'AmauiIconMaterialFileSaveOffW100Filled';

export default IconMaterialFileSaveOffW100Filled;
