import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileMapW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileMapW100'

      short_name='FileMap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q14 0 23-9t9-23v-496q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v496q0 14 9 23t23 9Zm248-455q-56 0-98 38.5T340-512q0 54 42 105.5t78 83.5q5 4 10 6t10 2q5 0 10-2t10-6q37-32 78.5-83.5T620-512q0-66-42-104.5T480-655Zm0 183q-17 0-28.5-11.5T440-512q0-17 11.5-28.5T480-552q17 0 28.5 11.5T520-512q0 17-11.5 28.5T480-472ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialFileMapW100.displayName = 'AmauiIconMaterialFileMapW100';

export default IconMaterialFileMapW100;
