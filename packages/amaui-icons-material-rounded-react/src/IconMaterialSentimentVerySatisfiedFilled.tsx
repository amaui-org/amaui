import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSentimentVerySatisfiedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentVerySatisfiedFilled'

      short_name='SentimentVerySatisfied'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.275 10.475q.2.2.512.213.313.012.538-.188l.575-.55.525.525q.225.225.525.225.3 0 .525-.225.225-.225.213-.525-.013-.3-.213-.525l-.875-.9q-.15-.15-.325-.225-.175-.075-.375-.075t-.387.075q-.188.075-.338.225l-.9.9q-.225.225-.225.525 0 .3.225.525Zm6.25 0q.225.225.525.225.3 0 .525-.225l.525-.525.575.55q.225.2.525.2.3 0 .525-.225.225-.225.225-.525 0-.3-.225-.525l-.9-.9q-.15-.15-.337-.225-.188-.075-.388-.075t-.375.075q-.175.075-.325.225l-.9.9q-.2.225-.2.525 0 .3.225.525ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-4.5q1.55 0 2.775-.75Q16 16 16.725 14.775q.175-.3.025-.537-.15-.238-.5-.238h-8.5q-.35 0-.5.238-.15.237.025.537Q8 16 9.225 16.75T12 17.5Z"/>
    </Icon>
  );
});

IconMaterialSentimentVerySatisfiedFilled.displayName = 'AmauiIconMaterialSentimentVerySatisfiedFilled';

export default IconMaterialSentimentVerySatisfiedFilled;
