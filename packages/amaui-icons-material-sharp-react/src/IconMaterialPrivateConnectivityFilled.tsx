import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrivateConnectivityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivateConnectivityFilled'

      short_name='PrivateConnectivity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19q-2.65 0-4.612-1.712Q5.425 15.575 5.075 13H2v-2h3.075q.35-2.575 2.313-4.288Q9.35 5 12 5q2.65 0 4.613 1.712Q18.575 8.425 18.925 11H22v2h-3.075q-.35 2.575-2.312 4.288Q14.65 19 12 19Zm-3-3.5h6v-5h-1v-.9q0-.875-.575-1.487Q12.85 7.5 12 7.5q-.825 0-1.412.587Q10 8.675 10 9.5v1H9Zm3-1.75q-.325 0-.537-.213-.213-.212-.213-.537 0-.325.213-.538.212-.212.537-.212.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213Zm-1-3.25v-1q0-.425.288-.713.287-.287.712-.287t.713.287Q13 9.075 13 9.5v1Z"/>
    </Icon>
  );
});

IconMaterialPrivateConnectivityFilled.displayName = 'AmauiIconMaterialPrivateConnectivityFilled';

export default IconMaterialPrivateConnectivityFilled;
