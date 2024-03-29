import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuizFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuizFilled'

      short_name='Quiz'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.25 11.8h1.5q0-.725.15-1.063.15-.337.7-.887.75-.75 1-1.213.25-.462.25-1.087 0-1.125-.788-1.837Q15.275 5 14 5q-1.025 0-1.787.575-.763.575-1.063 1.525l1.35.55q.225-.625.613-.938Q13.5 6.4 14 6.4q.6 0 .975.337.375.338.375.913 0 .35-.2.662-.2.313-.7.788-.825.725-1.012 1.137-.188.413-.188 1.563ZM14 15q.425 0 .738-.312.312-.313.312-.738t-.312-.738Q14.425 12.9 14 12.9t-.737.312q-.313.313-.313.738t.313.738Q13.575 15 14 15Zm-8 3V2h16v16Zm-4 4V6h2v14h14v2Z"/>
    </Icon>
  );
});

IconMaterialQuizFilled.displayName = 'AmauiIconMaterialQuizFilled';

export default IconMaterialQuizFilled;
