import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickPhrases = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickPhrases'

      short_name='QuickPhrases'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22.5v-5.525q-2.525-.2-4.262-2.05Q2 13.075 2 10.5q0-2.725 1.888-4.613Q5.775 4 8.5 4h.675L7.6 2.4 9 1l4 4-4 4-1.4-1.4L9.175 6H8.5Q6.625 6 5.312 7.312 4 8.625 4 10.5q0 1.875 1.312 3.188Q6.625 15 8.5 15H10v2.675L12.675 15H15.5q1.875 0 3.188-1.312Q20 12.375 20 10.5q0-1.875-1.312-3.188Q17.375 6 15.5 6H15V4h.5q2.725 0 4.613 1.887Q22 7.775 22 10.5q0 2.725-1.887 4.613Q18.225 17 15.5 17h-2Z"/>
    </Icon>
  );
});

IconMaterialQuickPhrases.displayName = 'AmauiIconMaterialQuickPhrases';

export default IconMaterialQuickPhrases;
