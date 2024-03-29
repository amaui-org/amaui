import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccessibilityNewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibilityNewFilled'

      short_name='AccessibilityNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 6q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6Zm8 2.25q-1.2.275-2.475.462Q16.25 8.9 15 9v12.025q0 .425-.287.7Q14.425 22 14 22t-.712-.288Q13 21.425 13 21v-5h-2v5.025q0 .425-.287.7Q10.425 22 10 22t-.712-.288Q9 21.425 9 21V9q-1.25-.1-2.525-.288Q5.2 8.525 4 8.25q-.425-.1-.65-.463-.225-.362-.1-.787.1-.425.463-.638.362-.212.787-.112 1.8.4 3.713.575Q10.125 7 12 7t3.787-.175Q17.7 6.65 19.5 6.25q.425-.1.775.112.35.213.475.638.1.425-.112.787-.213.363-.638.463Z"/>
    </Icon>
  );
});

IconMaterialAccessibilityNewFilled.displayName = 'AmauiIconMaterialAccessibilityNewFilled';

export default IconMaterialAccessibilityNewFilled;
