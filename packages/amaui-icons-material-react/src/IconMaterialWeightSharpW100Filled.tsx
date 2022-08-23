import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWeightSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeightSharpW100Filled'
      short_name='Weight'

      {...props}
    >
      <path d="M12 8.3q.425 0 .713-.288Q13 7.725 13 7.3t-.287-.712Q12.425 6.3 12 6.3t-.712.288Q11 6.875 11 7.3t.288.712q.287.288.712.288ZM5.175 19.7 6.8 8.3h3.825q-.15-.2-.237-.463-.088-.262-.088-.537 0-.725.488-1.213Q11.275 5.6 12 5.6t1.213.487q.487.488.487 1.213 0 .275-.087.537-.088.263-.238.463H17.2l1.625 11.4Z"/>
    </Icon>
  );
});

IconMaterialWeightSharpW100Filled.displayName = 'AmauiIconMaterialWeightSharpW100Filled';

export default IconMaterialWeightSharpW100Filled;
