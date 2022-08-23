import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWeightRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeightRoundedW100Filled'
      short_name='Weight'

      {...props}
    >
      <path d="M12 8.3q.425 0 .713-.288Q13 7.725 13 7.3t-.287-.712Q12.425 6.3 12 6.3t-.712.288Q11 6.875 11 7.3t.288.712q.287.288.712.288Zm1.375 0H15.9q.575 0 .988.362.412.363.487.938l1.2 8.4q.1.675-.35 1.188-.45.512-1.15.512H6.925q-.7 0-1.15-.512-.45-.513-.35-1.188l1.2-8.4q.075-.575.488-.938.412-.362.987-.362h2.525q-.15-.2-.237-.463-.088-.262-.088-.537 0-.725.488-1.213Q11.275 5.6 12 5.6t1.213.487q.487.488.487 1.213 0 .275-.087.537-.088.263-.238.463Z"/>
    </Icon>
  );
});

IconMaterialWeightRoundedW100Filled.displayName = 'AmauiIconMaterialWeightRoundedW100Filled';

export default IconMaterialWeightRoundedW100Filled;
