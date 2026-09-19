-- Allow anonymous and authenticated users to submit contact messages
CREATE POLICY "Allow public insert to contact_messages"
ON public.contact_messages
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
