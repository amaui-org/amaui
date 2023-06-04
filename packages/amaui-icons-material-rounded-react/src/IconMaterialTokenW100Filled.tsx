import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTokenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TokenW100Filled'

      short_name='Token'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.225 10.05-5.2-2.875 7.25-4.025q.35-.2.725-.2t.725.2l7.25 4.025-5.2 2.875q-.575-.725-1.287-1.063Q12.775 8.65 12 8.65q-.75 0-1.475.337-.725.338-1.3 1.063Zm2.425 11-7.225-4q-.35-.2-.562-.537-.213-.338-.213-.763v-8L8.9 10.7q-.125.35-.187.65-.063.3-.063.65 0 1.3.85 2.237.85.938 2.15 1.138Zm.35-6.4q-1.1 0-1.875-.775Q9.35 13.1 9.35 12t.775-1.875Q10.9 9.35 12 9.35t1.875.775q.775.775.775 1.875t-.775 1.875q-.775.775-1.875.775Zm.35 6.4v-5.675q1.3-.2 2.15-1.138.85-.937.85-2.237 0-.35-.062-.638-.063-.287-.188-.662l5.25-2.95v8q0 .425-.212.763-.213.337-.563.537Z"/>
    </Icon>
  );
});

IconMaterialTokenW100Filled.displayName = 'AmauiIconMaterialTokenW100Filled';

export default IconMaterialTokenW100Filled;
