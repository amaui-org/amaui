import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLayersW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersW100Filled'

      short_name='Layers'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.65q-.25 0-.488-.088-.237-.087-.437-.237l-5.625-4.35q-.125-.1-.138-.263-.012-.162.113-.287.1-.075.225-.075t.225.075l5.625 4.35q.225.175.5.175t.5-.175l5.625-4.35q.1-.075.225-.075t.225.075q.125.125.113.287-.013.163-.138.263l-5.625 4.35q-.2.15-.437.237-.238.088-.488.088Zm0-3.45q-.25 0-.488-.088-.237-.087-.437-.237l-5.2-4.025q-.15-.125-.225-.275-.075-.15-.075-.325 0-.175.075-.338.075-.162.225-.262l5.2-4.025q.2-.15.437-.238Q11.75 4.3 12 4.3t.488.087q.237.088.437.238l5.2 4.025q.15.125.225.275.075.15.075.325 0 .175-.075.325-.075.15-.225.275l-5.2 4.025q-.2.15-.437.237-.238.088-.488.088Z"/>
    </Icon>
  );
});

IconMaterialLayersW100Filled.displayName = 'AmauiIconMaterialLayersW100Filled';

export default IconMaterialLayersW100Filled;
