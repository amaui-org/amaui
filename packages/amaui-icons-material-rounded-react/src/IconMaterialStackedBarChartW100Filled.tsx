import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedBarChartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedBarChartW100Filled'

      short_name='StackedBarChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19.35q-.575 0-.962-.388-.388-.387-.388-.962V9.65h2.7V18q0 .575-.387.962-.388.388-.963.388Zm-1.35-12V6q0-.575.388-.963.387-.387.962-.387t.963.387q.387.388.387.963v1.35Zm7.35 12q-.575 0-.962-.388-.388-.387-.388-.962v-5.35h2.7V18q0 .575-.387.962-.388.388-.963.388Zm-1.35-9V9q0-.575.388-.963.387-.387.962-.387t.963.387q.387.388.387.963v1.35Zm7.35 9q-.575 0-.962-.388-.388-.387-.388-.962v-2.35h2.7V18q0 .575-.388.962-.387.388-.962.388Zm-1.35-6V12q0-.575.388-.963.387-.387.962-.387t.962.387q.388.388.388.963v1.35Z"/>
    </Icon>
  );
});

IconMaterialStackedBarChartW100Filled.displayName = 'AmauiIconMaterialStackedBarChartW100Filled';

export default IconMaterialStackedBarChartW100Filled;
