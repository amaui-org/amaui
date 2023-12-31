import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDominoMaskW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DominoMaskW100Filled'

      short_name='DominoMask'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-292q-40 0-78.5-14.5T166-348q-38-37-56-89.5T92-545q0-54 25-88.5t73-34.5q8 0 16.5 1.5T223-662l257 97 257-97q8-3 16.5-4.5T770-668q48 0 73 34.5t25 88.5q0 55-18 107.5T794-348q-29 27-67.5 41.5T648-292q-52 0-95.5-30L509-352h-58l-43.5 30Q364-292 312-292Zm37-120q23 0 37-10.5t14-27.5q-1-34-49-66t-100-32q-23 0-36.5 10.5T201-510q1 35 48.5 66.5T349-412Zm262 0q52 0 100-32t49-66q0-17-14-27.5T709-548q-51 1-99 32.5T561-450q0 17 13.5 27.5T611-412Z"/>
    </Icon>
  );
});

IconMaterialDominoMaskW100Filled.displayName = 'AmauiIconMaterialDominoMaskW100Filled';

export default IconMaterialDominoMaskW100Filled;
