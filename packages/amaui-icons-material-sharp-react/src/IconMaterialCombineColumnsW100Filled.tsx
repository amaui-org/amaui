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
      <path d="M204-172v-616h216v123q-60 20-97 71t-37 114q0 63 37 114t97 71v123H204Zm336 0v-123q60-20 97-71t37-114q0-63-37-114t-97-71v-123h216v616H540Zm-74-214v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Z"/>
    </Icon>
  );
});

IconMaterialCombineColumnsW100Filled.displayName = 'AmauiIconMaterialCombineColumnsW100Filled';

export default IconMaterialCombineColumnsW100Filled;
