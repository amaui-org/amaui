import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelfImprovementW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelfImprovementW100Filled'

      short_name='SelfImprovement'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 8.35q-.675 0-1.137-.462-.463-.463-.463-1.138 0-.675.463-1.138.462-.462 1.137-.462t1.138.462q.462.463.462 1.138 0 .675-.462 1.138-.463.462-1.138.462ZM6.8 19.1q-.5 0-.825-.275-.325-.275-.325-.775 0-.35.2-.588.2-.237.5-.362l4.3-1.7v-4.2q-1.825 2.15-3.187 3.05-1.363.9-3.238 1.2-.15.025-.262-.075-.113-.1-.113-.275 0-.125.1-.225t.225-.125q1.375-.175 2.613-.9 1.237-.725 2.312-1.95l1.35-1.55q.2-.225.475-.362.275-.138.575-.138h1q.3 0 .575.138.275.137.475.362l1.35 1.55q1.075 1.225 2.312 1.95 1.238.725 2.613.9.125.025.225.125t.1.225q0 .175-.112.275-.113.1-.263.075-1.875-.3-3.237-1.2-1.363-.9-3.188-3.05v4.2l4.3 1.7q.3.125.5.362.2.238.2.588 0 .5-.325.775t-.825.275H10v-.05q0-.575.312-.887.313-.313.888-.313h3.3q.225 0 .363-.138.137-.137.137-.362 0-.225-.137-.362-.138-.138-.363-.138h-3.3q-.975 0-1.587.612Q9 18.075 9 19.05v.05Z"/>
    </Icon>
  );
});

IconMaterialSelfImprovementW100Filled.displayName = 'AmauiIconMaterialSelfImprovementW100Filled';

export default IconMaterialSelfImprovementW100Filled;
