import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneInTalk = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneInTalk'

      short_name='PhoneInTalk'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 12q-.4 0-.712-.288-.313-.287-.363-.712-.325-2.325-1.962-3.963Q15.325 5.4 13 5.075q-.425-.05-.712-.35Q12 4.425 12 4t.3-.713q.3-.287.7-.237 3.15.35 5.375 2.575T20.95 11q.05.4-.238.7-.287.3-.712.3Zm-4.175 0q-.325 0-.575-.225-.25-.225-.375-.6-.2-.725-.762-1.288-.563-.562-1.288-.762-.375-.125-.6-.375Q12 8.5 12 8.15q0-.5.35-.813.35-.312.775-.212 1.4.325 2.413 1.337 1.012 1.013 1.337 2.413.1.425-.225.775-.325.35-.825.35Zm4.125 9q-3.225 0-6.287-1.438-3.063-1.437-5.425-3.8-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637-.063.288-.288.513L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.338.362-.112.712-.062l3.45.7q.35.075.575.337.225.263.225.613v4.05q0 .45-.3.75t-.75.3ZM6.05 9 7.7 7.35 7.25 5h-2.2q.125 1.025.35 2.025.225 1 .65 1.975ZM19 18.95v-2.2l-2.35-.5L15 17.9q.975.425 1.975.7 1 .275 2.025.35Zm-4-1.05ZM6.05 9Z"/>
    </Icon>
  );
});

IconMaterialPhoneInTalk.displayName = 'AmauiIconMaterialPhoneInTalk';

export default IconMaterialPhoneInTalk;
