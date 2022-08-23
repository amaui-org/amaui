import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHouseWithShieldRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseWithShieldRoundedW100'
      short_name='HouseWithShield'

      {...props}
    >
      <path d="M9.05 13.175q0 1.2.7 2.337.7 1.138 1.9 1.538.1.05.175.063.075.012.175.012.1 0 .175-.012.075-.013.175-.063 1.2-.4 1.9-1.538.7-1.137.7-2.337v-1.2q0-.325-.175-.588-.175-.262-.45-.412L12.5 10.05q-.25-.125-.5-.125t-.5.125l-1.825.925q-.275.15-.45.412-.175.263-.175.588ZM6.8 19.7q-.625 0-1.062-.438Q5.3 18.825 5.3 18.2v-7.8q0-.35.163-.675.162-.325.437-.525l5.2-3.9q.4-.3.9-.3t.9.3l5.2 3.9q.275.2.438.525.162.325.162.675v7.8q0 .625-.438 1.062-.437.438-1.062.438Zm0-.7h10.4q.35 0 .575-.225Q18 18.55 18 18.2v-7.8q0-.2-.087-.363-.088-.162-.238-.287l-5.2-3.9q-.2-.175-.475-.175-.275 0-.475.175l-5.2 3.9q-.15.125-.237.287Q6 10.2 6 10.4v7.8q0 .35.225.575Q6.45 19 6.8 19Zm5.2-6.675Z"/>
    </Icon>
  );
});

IconMaterialHouseWithShieldRoundedW100.displayName = 'AmauiIconMaterialHouseWithShieldRoundedW100';

export default IconMaterialHouseWithShieldRoundedW100;
