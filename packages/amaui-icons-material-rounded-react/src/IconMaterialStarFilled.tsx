import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarFilled'

      short_name='Star'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 20.125q-.575.45-1.175.025-.6-.425-.4-1.125L8.15 14.4l-3.625-2.575q-.6-.425-.362-1.125.237-.7.962-.7H9.6l1.45-4.8q.125-.35.388-.538.262-.187.562-.187.3 0 .562.187.263.188.388.538L14.4 10h4.475q.725 0 .963.7.237.7-.363 1.125L15.85 14.4l1.425 4.625q.2.7-.4 1.125-.6.425-1.175-.025L12 17.3Z"/>
    </Icon>
  );
});

IconMaterialStarFilled.displayName = 'AmauiIconMaterialStarFilled';

export default IconMaterialStarFilled;
