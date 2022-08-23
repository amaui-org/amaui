import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBalconySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BalconySharpW100Filled'
      short_name='Balcony'

      {...props}
    >
      <path d="M8.3 11.7V10.3H9.7V11.7ZM14.3 11.7V10.3H15.7V11.7ZM4.3 20.7V14.55H5.3V10Q5.3 8.6 5.825 7.388Q6.35 6.175 7.263 5.262Q8.175 4.35 9.4 3.825Q10.625 3.3 12 3.3Q13.4 3.3 14.613 3.825Q15.825 4.35 16.738 5.262Q17.65 6.175 18.175 7.388Q18.7 8.6 18.7 10V14.55H19.7V20.7ZM5 20H7.65V15.25H5ZM8.35 20H11.65V15.25H8.35ZM6 14.55H11.65V4.025Q9.525 4.075 7.763 5.737Q6 7.4 6 10ZM12.35 14.55H18V10Q18 7.4 16.238 5.737Q14.475 4.075 12.35 4.025ZM12.35 20H15.65V15.25H12.35ZM16.35 20H19V15.25H16.35Z"/>
    </Icon>
  );
});

IconMaterialBalconySharpW100Filled.displayName = 'AmauiIconMaterialBalconySharpW100Filled';

export default IconMaterialBalconySharpW100Filled;
