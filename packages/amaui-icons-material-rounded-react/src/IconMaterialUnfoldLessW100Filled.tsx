import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfoldLessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldLessW100Filled'

      short_name='UnfoldLess'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 8.7q-.125 0-.262-.05-.138-.05-.263-.175L8.65 5.65q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125L12 8l2.85-2.85q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-2.825 2.825q-.125.125-.25.175-.125.05-.275.05ZM8.65 18.85q-.125-.125-.125-.25t.125-.25l2.825-2.825q.125-.125.263-.175.137-.05.262-.05.15 0 .275.05.125.05.25.175l2.825 2.825q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125L12 16l-2.85 2.85q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialUnfoldLessW100Filled.displayName = 'AmauiIconMaterialUnfoldLessW100Filled';

export default IconMaterialUnfoldLessW100Filled;
