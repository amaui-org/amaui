import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPregnantWomanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PregnantWomanW100Filled'

      short_name='PregnantWoman'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 5.7q-.675 0-1.137-.463Q9.4 4.775 9.4 4.1t.463-1.138Q10.325 2.5 11 2.5t1.138.462q.462.463.462 1.138 0 .675-.462 1.137Q11.675 5.7 11 5.7Zm.475 15.65q-.225 0-.375-.15t-.15-.375V15.7h-.9q-.325 0-.537-.212-.213-.213-.213-.538v-5.7q0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213.9.2 1.45.95.55.75.55 1.7v3.05q0 .325-.212.538-.213.212-.538.212H12v5.125q0 .225-.15.375t-.375.15Z"/>
    </Icon>
  );
});

IconMaterialPregnantWomanW100Filled.displayName = 'AmauiIconMaterialPregnantWomanW100Filled';

export default IconMaterialPregnantWomanW100Filled;
