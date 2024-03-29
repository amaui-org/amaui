import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHandymanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandymanFilled'

      short_name='Handyman'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.85 21.975q-.2 0-.375-.062-.175-.063-.325-.213l-5.3-5.3v-1l2.525-2.525h1l5.3 5.3q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325L19.55 21.7q-.15.15-.325.213-.175.062-.375.062Zm0-2.375.725-.725-4.25-4.25-.725.725ZM5.125 22q-.2 0-.387-.075-.188-.075-.338-.225l-2.1-2.1q-.15-.15-.225-.338Q2 19.075 2 18.875t.075-.375q.075-.175.225-.325l5.3-5.3h2.125l.85-.85L6.45 7.9H5.025L2 4.875 4.825 2.05 7.85 5.075V6.5l4.125 4.125 2.9-2.9L13.8 6.65l1.4-1.4h-2.825l-.7-.7L15.225 1l.7.7v2.825l1.4-1.4 3.55 3.55q.45.425.663.975.212.55.212 1.125T21.538 9.9q-.213.55-.663 1L18.75 8.775l-1.4 1.4-1.05-1.05-5.175 5.175v2.1l-5.3 5.3q-.15.15-.325.225-.175.075-.375.075Zm0-2.4 4.25-4.25-.725-.725-4.25 4.25Z"/>
    </Icon>
  );
});

IconMaterialHandymanFilled.displayName = 'AmauiIconMaterialHandymanFilled';

export default IconMaterialHandymanFilled;
