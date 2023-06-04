import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfoldLessDouble = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldLessDouble'

      short_name='UnfoldLessDouble'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="16.58,1.41 15.16,0 11.99,3.17 8.82,0 7.41,1.41 11.99,6"/><polygon points="16.58,6.41 15.16,5 11.99,8.17 8.82,5 7.41,6.41 11.99,11"/><polygon points="7.42,17.59 8.84,19 12.01,15.83 15.18,19 16.59,17.59 12.01,13"/><polygon points="7.42,22.59 8.84,24 12.01,20.83 15.18,24 16.59,22.59 12.01,18"/></g></g>
    </Icon>
  );
});

IconMaterialUnfoldLessDouble.displayName = 'AmauiIconMaterialUnfoldLessDouble';

export default IconMaterialUnfoldLessDouble;
