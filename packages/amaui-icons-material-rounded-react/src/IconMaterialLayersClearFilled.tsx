import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLayersClearFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersClearFilled'

      short_name='LayersClear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.1 12.8 8.25 4.9l2.525-1.95q.275-.2.588-.313.312-.112.637-.112t.638.112q.312.113.587.313l6.75 5.25q.2.15.3.362.1.213.1.438t-.1.438q-.1.212-.3.362Zm2.875 2.85-1.45-1.45 1.225-.925q.275-.2.613-.2.337 0 .612.2.4.3.4.787 0 .488-.4.788Zm.125 5.75-3.3-3.3-2.575 2q-.275.2-.587.313-.313.112-.638.112t-.637-.112q-.313-.113-.588-.313l-6.75-5.25q-.4-.3-.387-.788.012-.487.412-.787.275-.2.6-.2.325 0 .6.2L12 18.5l2.35-1.825-1.425-1.425q-.225.125-.437.175-.213.05-.488.05-.325 0-.625-.1t-.6-.325L4 9.775q-.2-.15-.287-.35-.088-.2-.088-.425 0-.225.075-.438.075-.212.275-.362l1.05-.825-2.95-2.95q-.3-.3-.3-.7 0-.4.3-.7.3-.3.713-.3.412 0 .712.3L20.5 20q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialLayersClearFilled.displayName = 'AmauiIconMaterialLayersClearFilled';

export default IconMaterialLayersClearFilled;
