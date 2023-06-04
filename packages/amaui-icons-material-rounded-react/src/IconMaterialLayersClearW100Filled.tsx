import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLayersClearW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersClearW100Filled'

      short_name='LayersClear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.75 12.45-6.05-6 2.375-1.85q.2-.15.437-.225Q11.75 4.3 12 4.3t.488.075q.237.075.437.225l5.2 4.05q.15.125.225.275.075.15.075.325 0 .175-.075.325-.075.15-.225.275Zm1.95 1.95-.5-.5 1.925-1.475q.1-.075.225-.075t.225.075q.125.125.113.287-.013.163-.138.263Zm3.3 7.15-5.45-5.45-1.625 1.25q-.2.15-.437.225-.238.075-.488.075t-.488-.075q-.237-.075-.437-.225L5.45 12.975q-.125-.1-.138-.263-.012-.162.113-.287.1-.075.225-.075t.225.075l5.625 4.35q.225.175.5.175t.5-.175l1.525-1.2L12.55 14.1q-.125.05-.25.075-.125.025-.3.025-.25 0-.488-.088-.237-.087-.437-.237L5.85 9.825q-.15-.125-.212-.263-.063-.137-.063-.312t.063-.325q.062-.15.212-.275l.7-.55L2.1 3.65q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l17.9 17.9q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialLayersClearW100Filled.displayName = 'AmauiIconMaterialLayersClearW100Filled';

export default IconMaterialLayersClearW100Filled;
