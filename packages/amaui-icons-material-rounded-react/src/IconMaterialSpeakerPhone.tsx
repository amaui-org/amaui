import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeakerPhone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerPhone'

      short_name='SpeakerPhone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 22h-4q-.825 0-1.412-.587Q8 20.825 8 20v-8q0-.825.588-1.413Q9.175 10 10 10h4q.825 0 1.413.587Q16 11.175 16 12v8q0 .825-.587 1.413Q14.825 22 14 22Zm0-2v-8h-4v8Zm0 0h-4 4ZM7.725 7.775q-.3-.3-.3-.713 0-.412.35-.662.925-.675 2-1.038Q10.85 5 12 5q1.15 0 2.225.362 1.075.363 2 1.038.35.25.362.65.013.4-.312.725-.275.275-.7.3-.425.025-.8-.225-.6-.425-1.312-.637Q12.75 7 12 7q-.75 0-1.462.213-.713.212-1.313.637-.375.25-.8.225-.425-.025-.7-.3ZM4.95 4.9q-.3-.3-.288-.7.013-.4.313-.65 1.5-1.25 3.288-1.9Q10.05 1 12 1q1.95 0 3.738.65 1.787.65 3.287 1.9.3.25.313.65.012.4-.288.7-.275.275-.687.3-.413.025-.763-.25Q16.4 4 14.963 3.5 13.525 3 12 3q-1.525 0-2.962.5Q7.6 4 6.4 4.95q-.35.275-.762.25-.413-.025-.688-.3Z"/>
    </Icon>
  );
});

IconMaterialSpeakerPhone.displayName = 'AmauiIconMaterialSpeakerPhone';

export default IconMaterialSpeakerPhone;
