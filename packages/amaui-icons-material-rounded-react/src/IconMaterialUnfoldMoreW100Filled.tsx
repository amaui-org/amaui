import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfoldMoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreW100Filled'

      short_name='UnfoldMore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.6 7.85q-.125-.125-.125-.25t.125-.25l2.875-2.875q.125-.125.263-.175.137-.05.262-.05.15 0 .275.05.125.05.25.175L15.4 7.35q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125L12 4.95l-2.9 2.9q-.125.125-.25.125T8.6 7.85Zm3.4 11.9q-.125 0-.262-.05-.138-.05-.263-.175L8.6 16.65q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l2.9 2.9 2.9-2.9q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-2.875 2.875q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialUnfoldMoreW100Filled.displayName = 'AmauiIconMaterialUnfoldMoreW100Filled';

export default IconMaterialUnfoldMoreW100Filled;
