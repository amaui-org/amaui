import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMan4RoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man4RoundedW700'
      short_name='Man4'

      {...props}
    >
      <path d="M11.3 22.275q-.9 0-1.562-.587-.663-.588-.788-1.463L7.675 10.35q-.2-1.425.75-2.488Q9.375 6.8 10.8 6.8h2.4q1.425 0 2.375 1.062.95 1.063.75 2.488l-1.275 9.875q-.125.875-.787 1.463-.663.587-1.563.587ZM12 5.8q-.975 0-1.675-.7-.7-.7-.7-1.675 0-.975.7-1.675.7-.7 1.675-.7.975 0 1.675.7.7.7.7 1.675 0 .975-.7 1.675-.7.7-1.675.7Z"/>
    </Icon>
  )
});

export default IconMaterialMan4RoundedW700;
