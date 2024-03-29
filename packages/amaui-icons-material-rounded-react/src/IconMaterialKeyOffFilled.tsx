import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyOffFilled'

      short_name='KeyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.075 21.9 12.2 15.025q-.8 1.35-2.175 2.163Q8.65 18 7 18q-2.5 0-4.25-1.75T1 12q0-1.65.812-3.025Q2.625 7.6 3.975 6.8L2.1 4.925q-.275-.275-.275-.688 0-.412.275-.712.3-.3.712-.3.413 0 .713.3L20.475 20.5q.275.275.288.688.012.412-.288.712-.275.275-.7.275-.425 0-.7-.275Zm3.5-9.925q0 .2-.062.375-.063.175-.213.325l-2.6 2.6q-.15.15-.312.225-.163.075-.388.075t-.387-.063q-.163-.062-.313-.212L17 14l-.075.1-4.1-4.1H20.6q.2 0 .388.075.187.075.312.2l.975.975q.15.15.225.337.075.188.075.388ZM7 15q1.075 0 1.875-.663.8-.662 1.025-1.612l-.562-.563-1.25-1.25-1.25-1.25-.563-.562q-1.05.225-1.662 1.062Q4 11 4 12q0 1.25.875 2.125T7 15Z"/>
    </Icon>
  );
});

IconMaterialKeyOffFilled.displayName = 'AmauiIconMaterialKeyOffFilled';

export default IconMaterialKeyOffFilled;
