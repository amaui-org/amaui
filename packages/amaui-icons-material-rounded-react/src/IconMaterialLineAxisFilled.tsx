import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineAxisFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineAxisFilled'

      short_name='LineAxis'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.5 13-5.25 5.25q-.325.325-.75.325t-.75-.325q-.325-.325-.325-.75t.325-.75L8.8 10.7q.3-.3.7-.3.4 0 .7.3l3.3 3.3 1.675-1.9-5.6-5.175L4.25 12.25q-.325.325-.75.325t-.75-.325q-.325-.325-.325-.75t.325-.75l6.075-6.075Q9.1 4.4 9.5 4.387q.4-.012.7.263l6.4 5.875 3.3-3.75q.275-.325.713-.325.437 0 .737.3.275.275.288.662.012.388-.263.688l-3.325 3.75 3.15 2.9q.35.3.35.75t-.325.775q-.3.3-.725.3t-.75-.275l-3.1-2.85-2.45 2.75q-.275.325-.712.338-.438.012-.738-.288Z"/>
    </Icon>
  );
});

IconMaterialLineAxisFilled.displayName = 'AmauiIconMaterialLineAxisFilled';

export default IconMaterialLineAxisFilled;
