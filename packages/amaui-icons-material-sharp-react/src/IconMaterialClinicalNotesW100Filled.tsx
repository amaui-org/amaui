import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClinicalNotesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClinicalNotesW100Filled'

      short_name='ClinicalNotes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 15.525q-.875 0-1.488-.613-.612-.612-.612-1.487 0-.875.612-1.487.613-.613 1.488-.613t1.488.613q.612.612.612 1.487 0 .875-.612 1.487-.613.613-1.488.613ZM11.9 21.1v-2.75q.8-.475 1.662-.788.863-.312 1.763-.462L17 19.325l1.65-2.225q.925.125 1.788.462.862.338 1.662.788v2.75Zm-3-1.4H4.3V4.3h15.4v4.8q-.6-.375-1.287-.575-.688-.2-1.413-.2-.175 0-.325.012-.15.013-.325.038V7.95h-8.7v.7h7.55q-1.05.4-1.813 1.175-.762.775-1.162 1.825H7.65v.7h4.375q-.125.65-.1 1.312.025.663.225 1.313-.225.1-.437.187-.213.088-.413.188H7.65v.7H8.9Z"/>
    </Icon>
  );
});

IconMaterialClinicalNotesW100Filled.displayName = 'AmauiIconMaterialClinicalNotesW100Filled';

export default IconMaterialClinicalNotesW100Filled;
