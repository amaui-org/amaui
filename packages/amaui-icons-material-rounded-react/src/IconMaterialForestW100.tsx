import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForestW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForestW100'

      short_name='Forest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 16.7H3.85q-.45 0-.662-.4-.213-.4.037-.775L6.45 10.7h-.5q-.45 0-.675-.4-.225-.4.05-.775l3.05-4.375Q8.6 4.825 9 4.825t.625.325L12 8.55l2.375-3.4q.225-.325.625-.325t.625.325l3.05 4.375q.275.375.05.775-.225.4-.675.4h-.5l3.225 4.825q.25.375.037.775-.212.4-.662.4H15.7V20q0 .275-.2.487-.2.213-.5.213-.275 0-.487-.213-.213-.212-.213-.487v-3.3H9.7V20q0 .275-.2.487-.2.213-.5.213-.275 0-.488-.213Q8.3 20.275 8.3 20Zm6.775-.7h5.175l-4-6h1.9L15 5.5l-2.55 3.65.275.375q.25.375.038.775-.213.4-.663.4h-.55ZM3.75 16h10.5l-4-6h1.9L9 5.5 5.85 10h1.9Zm0 0h4-1.9 6.3-1.9 4Zm11.325 0H11.55h1.213-.313H18.15h-1.9 4Zm-.775.7h1.4-1.4Zm-.175 0Z"/>
    </Icon>
  );
});

IconMaterialForestW100.displayName = 'AmauiIconMaterialForestW100';

export default IconMaterialForestW100;
