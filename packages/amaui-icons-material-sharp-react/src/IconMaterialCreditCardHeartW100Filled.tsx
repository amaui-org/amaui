import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCardHeartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardHeartW100Filled'

      short_name='CreditCardHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M697-172 585-284q-11-11-15-22.667-4-11.666-4-23.333 0-25.756 18.232-45.878Q602.463-396 631-396q22.867 0 35.933 10.5Q680-375 697-358q17-17 30.167-27.5 13.166-10.5 36.308-10.5Q793-396 810.5-376t17.5 45.766q0 12.078-4.5 24.156T809-284L697-172Zm-565-40v-536h696v239q-7-4-13.5-7.5T800-523v-75H160v76h432q-69 30-112 94t-43 144q0 18.925 2.5 36.962Q442-229 447-212H132Z"/>
    </Icon>
  );
});

IconMaterialCreditCardHeartW100Filled.displayName = 'AmauiIconMaterialCreditCardHeartW100Filled';

export default IconMaterialCreditCardHeartW100Filled;
