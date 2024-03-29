import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestDoorbellVisitorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDoorbellVisitorFilled'

      short_name='NestDoorbellVisitor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.125 0-3.562-1.438Q7 19.125 7 17V7q0-2.125 1.438-3.562Q9.875 2 12 2t3.562 1.438Q17 4.875 17 7v5h-3q-.825 0-1.412.575Q12 13.15 12 14q-.825 0-1.412.587Q10 15.175 10 16q0 .8.575 1.375T12 18Zm2 0v-.575q0-1.125 1.1-1.787 1.1-.663 2.9-.663 1.825 0 2.913.663Q22 20.3 22 21.425V22Zm4-4q-.825 0-1.413-.587Q16 16.825 16 16q0-.85.587-1.425Q17.175 14 18 14q.85 0 1.425.575Q20 15.15 20 16q0 .825-.575 1.413Q18.85 18 18 18Zm-6-1q-.45 0-.725-.312Q11 16.375 11 16q0-.375.275-.688Q11.55 15 12 15q.45 0 .725.275Q13 15.55 13 16q0 .375-.275.688Q12.45 17 12 17Zm0-7q.825 0 1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175 10 8t.588 1.412Q11.175 10 12 10Z"/>
    </Icon>
  );
});

IconMaterialNestDoorbellVisitorFilled.displayName = 'AmauiIconMaterialNestDoorbellVisitorFilled';

export default IconMaterialNestDoorbellVisitorFilled;
