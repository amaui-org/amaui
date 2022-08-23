import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssignmentTurnedInSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentTurnedInSharp'
      short_name='AssignmentTurnedIn'

      {...props}
    >
      <path d="M10.6 16.05 17.65 9 16.25 7.6 10.6 13.25 7.75 10.4 6.35 11.8ZM3 21V3H9.2Q9.525 2.1 10.288 1.55Q11.05 1 12 1Q12.95 1 13.713 1.55Q14.475 2.1 14.8 3H21V21ZM12 4.25Q12.325 4.25 12.538 4.037Q12.75 3.825 12.75 3.5Q12.75 3.175 12.538 2.962Q12.325 2.75 12 2.75Q11.675 2.75 11.463 2.962Q11.25 3.175 11.25 3.5Q11.25 3.825 11.463 4.037Q11.675 4.25 12 4.25ZM19 19V5H5V19ZM5 5V19Z"/>
    </Icon>
  );
});

IconMaterialAssignmentTurnedInSharp.displayName = 'AmauiIconMaterialAssignmentTurnedInSharp';

export default IconMaterialAssignmentTurnedInSharp;
