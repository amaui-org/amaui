import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBuildW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildW100'

      short_name='Build'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.5 20.95-7.2-7.2q-.575.275-1.175.438-.6.162-1.275.162-2.225 0-3.788-1.563Q3.5 11.225 3.5 9q0-.575.112-1.113.113-.537.338-1.037l3.5 3.45 2.7-2.7-3.4-3.45q.5-.225 1.013-.363.512-.137 1.087-.137 2.225 0 3.788 1.562Q14.2 6.775 14.2 9q0 .725-.15 1.325t-.45 1.125l7.2 7.2Zm0-1 1.3-1.3-7.075-7.075q.375-.55.575-1.213.2-.662.2-1.362 0-1.925-1.55-3.475t-4-1.125l2.7 2.7q.2.2.225.475.025.275-.175.475L7.95 10.8q-.2.2-.5.2t-.5-.2l-2.7-2.7q-.35 2.725 1.225 4.137Q7.05 13.65 8.85 13.65q.675 0 1.338-.188.662-.187 1.237-.587Zm-6.7-8.05Z"/>
    </Icon>
  );
});

IconMaterialBuildW100.displayName = 'AmauiIconMaterialBuildW100';

export default IconMaterialBuildW100;
