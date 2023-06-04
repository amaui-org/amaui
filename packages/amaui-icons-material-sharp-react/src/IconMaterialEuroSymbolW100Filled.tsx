import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEuroSymbolW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EuroSymbolW100Filled'

      short_name='EuroSymbol'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.35 20.1q-2.5 0-4.65-1.437-2.15-1.438-3.1-4.313H4v-.7h3.4q-.075-.3-.113-.8-.037-.5-.037-.85t.037-.812q.038-.463.113-.838H4v-.7h3.6q.825-2.6 2.95-4.175Q12.675 3.9 15.35 3.9q1.325 0 2.4.35T20 5.35l-.5.5q-1.025-.65-2.075-.95-1.05-.3-2.075-.3-2.6 0-4.463 1.487Q9.025 7.575 8.35 9.65h6.35v.7H8.15q-.125.375-.162.838-.038.462-.038.812 0 .35.063.863.062.512.137.787h6.55v.7H8.325q.875 2.575 2.85 3.813Q13.15 19.4 15.35 19.4q1.025 0 2.138-.313 1.112-.312 2.012-.962l.5.525q-1.2.8-2.288 1.125-1.087.325-2.362.325Z"/>
    </Icon>
  );
});

IconMaterialEuroSymbolW100Filled.displayName = 'AmauiIconMaterialEuroSymbolW100Filled';

export default IconMaterialEuroSymbolW100Filled;
