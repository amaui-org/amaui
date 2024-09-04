import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContrastSquareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContrastSquareW100'

      short_name='ContrastSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-6-2.5-11.5T750-750L210-210q5 5 10.5 7.5T232-200Zm109-391v66q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-66h66q6.07 0 10.03-3.95 3.97-3.96 3.97-10 0-6.05-3.97-10.05-3.96-4-10.03-4h-66v-66q0-6.07-3.95-10.03-3.96-3.97-10-3.97-6.05 0-10.05 3.97-4 3.96-4 10.03v66h-66q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4h66Zm324 250H525q-6.07 0-10.03-3.95-3.97-3.96-3.97-10 0-6.05 3.97-10.05 3.96-4 10.03-4h140q6.07 0 10.03 3.95 3.97 3.96 3.97 10 0 6.05-3.97 10.05-3.96 4-10.03 4Z"/>
    </Icon>
  );
});

IconMaterialContrastSquareW100.displayName = 'AmauiIconMaterialContrastSquareW100';

export default IconMaterialContrastSquareW100;
