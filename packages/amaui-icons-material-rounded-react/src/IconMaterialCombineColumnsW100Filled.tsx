import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCombineColumnsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CombineColumnsW100Filled'

      short_name='CombineColumns'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-172q-26 0-43-17t-17-43v-43q0-9 5.5-16.5T559-303q53-23 84-71t31-106q0-58-31-106t-84-71q-8-4-13.5-11.5T540-685v-43q0-26 17-43t43-17h96q26 0 43 17t17 43v496q0 26-17 43t-43 17h-96Zm-336 0q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h96q26 0 43 17t17 43v43q0 9-5.5 16.5T401-657q-53 23-84 71t-31 106q0 58 31 106t84 71q8 4 13.5 11.5T420-275v43q0 26-17 43t-43 17h-96Zm216-214q-6 0-10-4t-4-10v-66h-66q-6 0-10-4t-4-10q0-6 4-10t10-4h66v-66q0-6 4-10t10-4q6 0 10 4t4 10v66h66q6 0 10 4t4 10q0 6-4 10t-10 4h-66v66q0 6-4 10t-10 4Z"/>
    </Icon>
  );
});

IconMaterialCombineColumnsW100Filled.displayName = 'AmauiIconMaterialCombineColumnsW100Filled';

export default IconMaterialCombineColumnsW100Filled;
