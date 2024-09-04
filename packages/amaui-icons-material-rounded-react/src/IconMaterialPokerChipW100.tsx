import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPokerChipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PokerChipW100'

      short_name='PokerChip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-72 27.5-135.5T234-726q47-47 110.5-74.5T480-828q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132Zm-14-28v-84q-42-2-78-17.5T323-303l-60 59q41 37 92.5 59.5T466-160Zm28 0q59-2 110-24.5t92-59.5l-59-59q-29 26-65 41.5T494-244v84Zm-14-111q87 0 148-61t61-148q0-87-61-148t-148-61q-87 0-148 61t-61 148q0 87 61 148t148 61Zm236 8q37-41 59.5-92.5T800-466h-84q-2 42-17.5 78T657-323l59 60Zm-472 0 59-60q-26-29-41.5-65T244-466h-84q2 59 24.5 110.5T244-263Zm224-103-72-96q-6-8-6-18t6-18l72-96q5-6 12-6t12 6l72 96q6 8 6 18t-6 18l-72 96q-5 6-12 6t-12-6ZM160-494h84q2-42 17.5-78t41.5-65l-59-59q-37 41-59.5 92T160-494Zm556 0h84q-2-59-24.5-110T716-696l-59 59q26 29 41.5 65t17.5 78ZM323-657q29-26 65-41.5t78-17.5v-84q-59 2-110.5 24.5T263-716l60 59Zm314 0 59-59q-41-37-92-59.5T494-800v84q42 2 78 17.5t65 41.5Z"/>
    </Icon>
  );
});

IconMaterialPokerChipW100.displayName = 'AmauiIconMaterialPokerChipW100';

export default IconMaterialPokerChipW100;
